import React, { Dispatch, FC, PropsWithChildren, createContext, useContext, useState } from "react"

interface IChatContext {
    totalComments: number,
    totalLikes: number,
    setTotalComments: React.Dispatch<React.SetStateAction<number>>,
    setTotalLikes: React.Dispatch<React.SetStateAction<number>>
}

const ChatContext: IChatContext = {
    totalComments: 0,
    totalLikes: 0,
    setTotalComments: () => { },
    setTotalLikes: () => { }
}
const Context = createContext<IChatContext>(ChatContext);
export const useGlobalContext = () => useContext(Context);


export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [totalComments, setTotalComments] = useState(0);
    const [totalLikes, setTotalLikes] = useState(0);

    return (
        <Context.Provider value={{
            totalComments, totalLikes, setTotalComments, setTotalLikes
        }}>{children}
        </Context.Provider>)
}