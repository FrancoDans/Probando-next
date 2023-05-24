"use client";
import { useState } from "react";
import style from "./post.module.css";
export function LikeButton({ id }) {
    const [liked, setLiked] = useState(false);

    return (
        <button className={style.buttonLike} onClick={() => setLiked(!liked)}>
            {liked ? "Ya no me gusta" : "Me gusta"}
        </button>
    );
}
