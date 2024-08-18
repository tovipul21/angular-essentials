import { Injectable } from "@angular/core";
import { INewTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})

export class TasksService{
    private userTasks = 
    [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary: 'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        }
    ];

    getUserTasks(userId: string){
        var userTasks = this.userTasks.filter((task) => task.userId === userId);
        return userTasks;
    }

    addTask(taskData: INewTaskData, userId: string){
        this.userTasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
        });
    }

    removeTask(taskId: string){
        this.userTasks = this.userTasks.filter((task) => task.id !== taskId);
    }

    completeTask(taskId: string){
        this.userTasks = this.userTasks.filter((task) => task.id !== taskId);
    }
}