const test = require('tape')
const uuid = require('uuid/v1')

const { Meeting, Program, ProgramSlot } = require('../')

test('valid meetings can be instantiated', (t) => {
    t.ok(new Meeting(
        uuid(),
        "(Di|con)vergent mob refactoring",
        "This is a silly workshop, don\'t come",
        new Date('2018-01-17T19:00:00'),
        new Date('2018-01-17T21:00:00'),
        new Program([
            new ProgramSlot(
                new Date('2018-01-17T19:00:00'),
                new Date('2018-01-17T20:00:00'),
                'Divergence',
                'Main room'
            ),
            new ProgramSlot(
                new Date('2018-01-17T20:00:00'),
                new Date('2018-01-17T21:00:00'),
                'Convergence',
                'Main room'
            )
        ])
    ) instanceof Meeting, 'instance should be of type Meeting')

    t.end();
})
