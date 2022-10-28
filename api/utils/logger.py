import os
import logging

loggers = {}


class Logger:
    def __init__(self, name, level=None):
        """init custom logger"""

        logger = logging.getLogger(name) if not loggers.get(name) else loggers.get(name)

        log_level = logging.DEBUG if not level else level

        logger.setLevel(log_level)

        self.logger = logger

    def get_logger(self, filename):
        """setup file handler
        param   filename    String      the string filename
        return  logger      LoggerClass the logger class with file handler registered
        """

        # create log path
        path = "/var/log/textura"
        if not os.path.isdir(path):
            os.mkdir(path)

        # set up handler if not exists
        if not self.logger.hasHandlers():
            self.handler = logging.FileHandler(filename=os.path.join(path, filename))

            formatter = logging.Formatter(
                "%(asctime)s [%(levelname)s] :: %(name)s :: %(message)s"
            )

            self.handler.setFormatter(formatter)

            self.logger.addHandler(self.handler)

        return self.logger
