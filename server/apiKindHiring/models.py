from server import db


class KindHiring(db.Model):
    __tablename__ = 'kind_hiring'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)

    def __init__(self, name=None):
        if name:
            self.name = name.lower()