function onEdit(e) {
  var ActiveSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Registrations');
  var WholeRange = ActiveSheet.getRange(ActiveSheet.getLastRow(),1,ActiveSheet.getLastRow() - 1,16);
  var AllValues = WholeRange.getValues()[0];

  var name = AllValues[2];
  var email = AllValues[1];
  var mobileNumber = AllValues[3];
  var course = AllValues[4];
  var year = AllValues[5];
  var collegeName = AllValues[6];
  var university = AllValues[7];
  var participantId = AllValues[11];
  var registrationId = AllValues[12];
  var event = AllValues[8];
  var team = AllValues[13];
  var teamMembers = AllValues[14];

  var participantPayload = {
    to: email,
    name: 'Delhi University Computer Science Society',
    subject: '[DUCSS] Thank you for registering for Sankalan!',
    htmlBody: `
    <p>Hi ${name},</p>

    <p>Thank you for registering for "${event}" at Sankalan! Please find your registration details as follows:</p>

    <p>
      Participant ID: <strong>${participantId}</strong><br/>
      Registration ID: <strong>${registrationId}</strong>
    </p>

    <p>You will receive more communication from the event organizers as the event draws nearer.</p>

    <p>
      Regards,<br />
      Delhi University Computer Science Society
    </p>
    `
  }

  var organizerPayload = {
    to: 'ducss+sankalan@cs.du.ac.in',
    cc: 'sudipto.mcs22.du+sankalan@gmail.com',
    name: 'Delhi University Computer Science Society',
    subject: '[SANKALAN] New Registration for ' + event,
    htmlBody: `
    <p>Hi Team,</p>

    <p>There has been a new registration for "${event}"! Please find your registration details as follows:</p>

    <p>
      Name: ${name}<br/>
      E-mail: ${email}<br/>
      Mobile: ${mobileNumber}<br/>
      Course: ${course}<br/>
      Year: ${year}<br/>
      College/Institute/Department: ${collegeName}<br />
      University: ${university}<br />
      Participant ID: <strong>${participantId}</strong><br/>
      Registration ID: <strong>${registrationId}</strong><br/>
      Event: ${event}<br/>
      Team Name: ${team}<br/>
      Team Members: ${teamMembers}<br/>
    </p>

    <p>Please confirm the same.</p>

    <p>
      Regards,<br />
      Delhi University Computer Science Society
    </p>
    `
  }

  if (!AllValues[15]) {
    MailApp.sendEmail(participantPayload);
    MailApp.sendEmail(organizerPayload);
    ActiveSheet.getRange(ActiveSheet.getLastRow(),16).setValue("Yes");
  }

}

