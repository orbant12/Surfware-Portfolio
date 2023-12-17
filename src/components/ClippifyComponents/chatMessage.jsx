


const ChatMessage = ({message,id}) =>{
    return(
        <div key={id} className={`chat-message ${message.user == "gpt" && "chatgpt"}`}>
            <div className="chat-message-center">
            <div className={`avatar ${message.user == "gpt" && "chatgpt"}`}>
                {message.user == "gpt" && 
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                imageRendering="optimizeQuality"
                                shapeRendering="geometricPrecision"
                                viewBox="0 0 375 375"

                            >
                                <defs>
                                <clipPath id="a">
                                    <path d="M267.36 156.547h24v24h-24Zm0 0" />
                                </clipPath>
                                </defs>
                                <path fill="#fff" d="M-37.5-37.5h450v450h-450z" />
                                <path d="M-37.5-37.5h450v450h-450z" />
                                <path
                                fill="#fff"
                                d="M120.781 202.072c7.14 0 12.934-4.328 14.7-10.879h-3.907c-1.512 4.41-5.668 7.184-10.668 7.184-6.55 0-11.215-4.747-11.215-11.551 0-6.805 4.664-11.551 11.215-11.551 4.871 0 8.864 2.605 10.375 6.848h3.95c-1.934-6.47-7.52-10.543-14.45-10.543-8.652 0-14.867 6.383-14.867 15.246 0 8.86 6.215 15.246 14.867 15.246ZM141.655 201.525h3.527v-31.078h-3.527ZM152.995 201.525h3.527v-21.797h-3.527Zm-1.094-28.14c0 1.554 1.137 2.73 2.86 2.73 1.718 0 2.812-1.176 2.812-2.73 0-1.594-1.094-2.77-2.813-2.77-1.722 0-2.859 1.176-2.859 2.77ZM176.222 202.072c6.425 0 11.085-4.832 11.085-11.469 0-6.594-4.66-11.422-11.085-11.422-3.57 0-6.594 1.469-8.57 3.907l-.419-3.36h-2.898v30.195h3.527v-11.507c1.973 2.27 4.914 3.656 8.36 3.656Zm-8.485-11.469c0-4.703 3.317-8.062 8.02-8.062 4.746 0 8.023 3.359 8.023 8.062 0 4.746-3.277 8.067-8.023 8.067-4.703 0-8.02-3.32-8.02-8.067ZM205.286 202.072c6.425 0 11.085-4.832 11.085-11.469 0-6.594-4.66-11.422-11.085-11.422-3.57 0-6.594 1.469-8.57 3.907l-.419-3.36H193.4v30.195h3.527v-11.507c1.973 2.27 4.914 3.656 8.36 3.656Zm-8.485-11.469c0-4.703 3.317-8.062 8.02-8.062 4.746 0 8.023 3.359 8.023 8.062 0 4.746-3.277 8.067-8.023 8.067-4.703 0-8.02-3.32-8.02-8.067ZM222.463 201.525h3.527v-21.797h-3.527Zm-1.094-28.14c0 1.554 1.137 2.73 2.86 2.73 1.718 0 2.812-1.176 2.812-2.73 0-1.594-1.094-2.77-2.813-2.77-1.722 0-2.859 1.176-2.859 2.77ZM235.904 177.502v2.226h-4.746v3.235h4.746v18.562h3.528v-18.562h7.601v-3.235h-7.601v-2.015c0-3.153 1.343-4.497 4.41-4.497h3.402V169.9h-3.738c-4.914 0-7.602 2.645-7.602 7.602ZM250.811 209.923h2.48c4.075 0 6.047-1.007 7.559-4.996l9.996-25.199h-3.738l-4.074 10.29-2.645 6.76-3.191-6.76-4.914-10.29h-3.95l10.332 21.293-1.007 2.563c-.926 2.433-1.891 3.023-4.703 3.023h-2.145Zm0 0"
                                />
                                <g clipPath="url(#a)">
                                <path
                                    fill="#5ce1e6"
                                    d="M285.332 156.547h-11.984a5.987 5.987 0 0 0-5.989 5.988 5.99 5.99 0 0 0 5.989 5.992h5.992v5.993a5.993 5.993 0 0 0 11.984 0v-11.985a5.99 5.99 0 0 0-5.992-5.988Zm0 0"
                                />
                                </g>
                            </svg>
                }
            </div>
            <div className="message">
                {message.message}
            </div>
            </div>  
        </div>
    )
}

export default ChatMessage;