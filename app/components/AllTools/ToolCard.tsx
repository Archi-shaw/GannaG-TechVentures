import React from 'react';

type ToolCardProps = {
    name : string;
    icon : React.ReactNode;
    description : string;
    onClick : () => void;
};

const ToolCard:React.FC<ToolCardProps> = ({name , icon , description , onClick}) => {
    
    return (
        <div className="h-40 w-64 bg-white cursor-pointer rounded-lg flex flex-col items-start px-5 py-4 hover:shadow-lg transition" onClick={onClick}>
            <div className="text-3xl mb-2">{icon}</div>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    ); 
}
export default ToolCard;