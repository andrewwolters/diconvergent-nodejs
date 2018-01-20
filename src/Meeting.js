module.exports = class Meeting {
    constructor(meetingId, title, description, start, end, program) {
        this.meetingId = meetingId
        this.title = title
        this.description = description
        this.start = start
        this.end = end
        this.program = program
    }
}
