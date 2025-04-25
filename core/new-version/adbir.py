### THE PURPOSE OF THIS FILE IS TO ALLOW FOR ADBIR TO BE RAN, 
### SO FOR EXAMPLE: adbir.exe file_name.adbir

import argparse

class Runtime:
    def __init__(self):

        # global enviroment rules 
        self.DEBUG_MODE = False

        parser = argparse.ArgumentParser()
        parser.add_argument('file_path', type = str, help = "path to file")
        parser.add_argument('--debug', action='store_true', help = "compiler debug mode")

        args = parser.parse_args()

        if args.debug:
            self.DEBUG_MODE = True

if __name__ == "__main__":
    Runtime()