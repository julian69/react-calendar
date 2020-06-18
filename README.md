## Instructions

The goal of this exercise is to create a demo calendar application using React & Redux. We strongly recommend create-react-app to make the bootstrapping of your application really easy.
Please don't use a `calendar` library, we would like to see your own calendar logic.


### The Task

You should start by rendering a single month view of a calendar for the current month – along with the lines of the `calendar` image in this project.


### Features & Requirements:

* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a color when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & color.
* Ability to delete reminders.
* Expand the calendar to support more than the current month.

### Notes:

* The data should be retained across different page views, but it’s not necessary to persist it beyond a browser refresh.
* This is a coding activity and not a design activity. That’s not to say we don’t appreciate good design or that we don’t value those skills if you have them! It’s just that it won’t have a high value when scoring this particular project.

## F.A.Q.

### How do you evaluate the exercise?
Our evaluation is based on many aspects, such as general approach adopted, quality of code, use of best practices, capabilities to keep the code simple and maintainable.

### How can I deliver the exercise?
To deliver the exercise, you should clone this repository and work on a new branch. When you'll consider it completed, just push the branch and open a Pull Request.


## Comments about implementation

### Workflow

### Create reminder
- Click on a day to open a modal.
- Select required fields (date is pick up from selected cell on click)
- If all good, click save.
- Reminder should appear in the correct cell

### Edit reminder
- Click on the reminder you wish to edit and a modal will be open.
- Edit any of the fields (note that "date" field only appers in the modal when in editing mode)
- If all good, click save.
- Reminder should appear in the correct cell with the new information

### Delete reminder
- Click on "X" button on the reminder you wish to delete.
- Reminder should disappear

### General usage
- To change month & year click on the arrows provided at the top.
- When there are multiple reminders in a cell and they exceed the size of the container you should scroll inside the box.

### Things I would add if this went to production
- Unit & integration test
- Maybe use context API instead of Redux
- More details in README file (or documentation)
- Responsiveness
- Accessibility
- Cross-browser functionality
- Confirmation modal when deleting a reminder
- Month & year Pickers
- Some UX/UI validations such as what happens with past dates.
