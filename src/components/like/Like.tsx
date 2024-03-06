import React, { useState } from 'react'
import like from "../../assets/like.svg";
import emptyLike from "../../assets/empty-like.svg";
import { useGlobalContext } from '../context/context';
import { LikeCount, LikeImage } from './Like.styles';

interface LikeProps {
    commentId: number;
    likes: string
}

const Like = ({ commentId, likes }: LikeProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const { setTotalLikes } = useGlobalContext();

    const handleClick = () => {
        setIsLiked(like => !like);
        setTotalLikes(total => isLiked ? total - 1 : total + 1);
    }
    return (
        <LikeCount onClick={handleClick}>
            <LikeImage width={18} height={16} src={isLiked ? like : emptyLike} />{isLiked ? likes + 1 : likes}
        </LikeCount>
    )
}

export default Like