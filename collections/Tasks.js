Tasks = new Mongo.Collection('tasks');

TaskSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Task Name"
    },
    deadline: {
        type: Date,
        label: "Deadline"
    },
    createdBy: {
        type: String,
        label: "Created By",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Tasks.attachSchema(TaskSchema);