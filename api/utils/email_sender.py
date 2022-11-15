import smtplib
from email.mime.text import MIMEText


from app import DevConfigs
from .util import get_project_root


class EmailSender:
    f_host = "smtp.gmail.com"
    f_port = 587
    f_user = None
    f_passwd = None

    sender = "textura <espada.team.official@gmail.com>"
    to = []
    cc = []
    subject = ""
    message = ""
    template_name = ""
    template_params = {}

    def __init__(
        self,
        to=[],
        cc=[],
        subject="default subject",
        message="content message",
    ):
        app_config = DevConfigs()
        self.f_user = app_config.GMAIL_ACCOUNT
        self.f_passwd = app_config.GMAIL_TOKEN
        self.to = to
        self.cc = cc
        self.subject = subject
        self.message = message

    def send_email(self):
        print("sening")
        smtpserver = smtplib.SMTP(self.f_host, self.f_port)
        smtpserver.ehlo()
        smtpserver.starttls()
        smtpserver.ehlo
        smtpserver.login(self.f_user, self.f_passwd)
        msg = MIMEText(self.message, "html")
        msg["Subject"] = self.subject
        msg["From"] = self.sender
        msg["To"] = ",".join(self.to)
        msg["Cc"] = ",".join(self.to)
        for t in self.to:
            smtpserver.sendmail(self.f_user, t, msg.as_string())
        smtpserver.close()
        print("Mail is sent successfully!!")
