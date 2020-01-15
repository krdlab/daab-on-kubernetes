// Description:
//   TODO
//
// Commands:
//   TODO
'use strict';

module.exports = (robot) => {
  robot.respond(/ping$/i, (res) => {
    res.send('PONG');
  });

  robot.respond(/adapter$/i, (res) => {
    res.send(robot.adapterName);
  });

  robot.respond(/echo (.*)$/i, (res) => {
    res.send(res.match[1]);
  });

  robot.respond(/time$/i, (res) => {
    res.send(`Server time is: ${new Date()}`);
  });

  robot.respond(/incr$/, res => {
    let c = robot.brain.get('daab-ping-test-counter') || 0;
    ++c;
    robot.brain.set('daab-ping-test-counter', c);
    res.send(`count: ${c}`);
  });

  robot.respond(/error$/, res => {
    throw new Error('dummy error');
  });

  robot.router.get('/hubot/webhook', (req, res) => {
    res.send("webhook called\n");
  });
};
