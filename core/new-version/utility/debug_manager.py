class debug:

    def __init__(self, ENV_DEBUG : bool):
        self.ENV_DEBUG = ENV_DEBUG

    def OUT(self, statement : str):
        if self.ENV_DEBUG == False: return
        
        print(f"[DEBUG] : {statement}")

    def UPDATE(self, state : bool):
        self.ENV_DEBUG = state

