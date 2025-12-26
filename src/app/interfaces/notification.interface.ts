export interface Notifications {
    notifications: NotificationAlert[]
}

export interface NotificationAlert { 
    id: string, 
    type: number, 
    description: string, 
    contentId: string, 
    contentValue: string,
    createdAt: string
}
 