// POST /api/auth/login
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { sendEmail } from '@/lib/auth/sendLoginEmail'; // <- write this separately
import crypto from 'crypto';
import dbConnect from '@/lib/mongodb';


export async function POST(req: NextRequest) {
  try {
    await dbConnect();
     
    const { email, password } = await req.json();
    if(!email || !password){
      return NextResponse.json(
        { error : 'Email and password both are required'},
        { status : 400},
      )
    }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(email)) {
  //   return NextResponse.json(
  //     { error: 'Invalid email format' },
  //     { status: 400 }
  //   );
  // }
    const user = await User.findOne({ email });
console.log("apple")
    if (!user || !user.password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
console.log(user)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate 6-digit code
    const twoFactorCode = crypto.randomInt(100000, 999999).toString();

    user.twoFactorCode = twoFactorCode;
    user.twoFactorCodeExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    await user.save();

    await sendEmail({
      to: email,
      subject: 'Your verification code',
      html: `<p>Your login verification code is: <strong>${twoFactorCode}</strong></p>`,
    });

    return NextResponse.json({ message: 'Verification code sent to your email' });
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
