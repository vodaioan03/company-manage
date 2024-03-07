
export type StateType = {
    menuOpen: boolean,
    toast: { text: string, success: boolean|undefined },
    theme: "light" | "dark",
    user: UserType,
    messages: MessageType[],
}

export type UserType = {
    username: string,
    email: string,
    avatar?: string,
}

export type MessageType = {
    id: string,
    text: string,
    date: string,
    isManager: boolean
}