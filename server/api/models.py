from server import db, ma
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import relationship
from sqlalchemy import Table, Column, Integer, ForeignKey
from datetime import datetime


# RELATIONSHIP TABLES ----------------------------------------------------------
persona_roles_rel = db.Table('persona_roles_rel',
    db.Column('persona_id',db.Integer, ForeignKey('persona.id')),
    db.Column('persona_role_id',db.Integer, ForeignKey('persona_roles.id'))
    )

pers_prod_rel = db.Table('pers_prod_rel',
    db.Column('persona_id',db.Integer, ForeignKey('persona.id')),
    db.Column('product_id',db.Integer, ForeignKey('product.id'))
    )

insight_product_rel = db.Table('insight_product_rel',
    db.Column('persona_id',db.Integer, ForeignKey('persona.id')),
    db.Column('insight_id',db.Integer, ForeignKey('insight.id'))
    )

insight_persona_rel = db.Table('insight_persona_rel',
    db.Column('product_id',db.Integer, ForeignKey('product.id')),
    db.Column('insight_id',db.Integer, ForeignKey('insight.id'))
    )

# PRODUCT ----------------------------------------------------------------------

class Product(db.Model):
    __tablename__ = 'product'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    description = db.Column(db.Text)
    metrics = db.Column(db.Text)
    goals = db.Column(db.Text)
    features = db.Column(db.Text)
    archived = db.Column(db.Boolean)
    owner = db.Column(db.Text)
    last_update  = db.Column(db.DateTime,
                            default=datetime.utcnow,
                            onupdate=datetime.utcnow)
    create_date = db.Column(db.DateTime,
                            default=datetime.utcnow,
                            onupdate=datetime.utcnow)
    revision = db.Column(db.Integer, default = 0)
    creator_id = db.Column(db.Integer)
    product_homepage = db.Column(db.Text)


class ProductSchema(ma.ModelSchema):
    class Meta:
        model = Product
        sqla_session = db.session

class ProductComments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    source_id = db.Column(db.Integer,ForeignKey('product.id'))
    comment_body = db.Column(db.Text)
    creator_id = db.Column(db.Integer, default = None)
    action = db.Column(db.Text)
    downchange = db.Column(db.Text)
    upchange = db.Column(db.Text)
    create_date = db.Column(db.DateTime,
                            default=datetime.utcnow)

class ProductCommentsSchema(ma.ModelSchema):
    class Meta:
        model = ProductComments
        sqla_session = db.session


## PERSONAS --------------------------------------------------------------------
class PersonaRoles(db.Model):
    __tablename__ = 'persona_roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    description = db.Column(db.Text)

class PersonaRoleSchema(ma.ModelSchema):
    class Meta:
        model = PersonaRoles
        sqla_session = db.session

class PersonaComments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    source_id = db.Column(db.Integer,ForeignKey('persona.id'))
    comment_body = db.Column(db.Text)
    creator_id = db.Column(db.Integer, default = None)
    action = db.Column(db.Text)
    downchange = db.Column(db.Text)
    upchange = db.Column(db.Text)
    create_date = db.Column(db.DateTime,
                            default=datetime.utcnow)

class PersonaCommentsSchema(ma.ModelSchema):
    class Meta:
        model = PersonaComments
        sqla_session = db.session

class Persona(db.Model):
    __tablename__ = 'persona'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    title = db.Column(db.Text)
    quote = db.Column(db.Text)
    job_function = db.Column(db.Text)
    needs = db.Column(db.Text)
    wants = db.Column(db.Text)
    pain_point = db.Column(db.Text)
    external = db.Column(db.Integer, default=0)
    market_size = db.Column(db.Integer)
    buss_val = db.Column(db.Integer)
    create_date = db.Column(db.DateTime,
                            default=datetime.utcnow)
                            #onupdate=datetime.utcnow) # USE IN FUTURE
    revision = db.Column(db.Integer, default = 0)
    creator_id = db.Column(db.Integer)
    access_group = db.Column(db.Integer)
    archived = db.Column(db.Boolean, default=False)
    persona_file = db.Column(db.Binary)
    persona_picture = db.Column(db.Binary)
    roles = relationship('PersonaRoles' , secondary = 'persona_roles_rel' , backref='personas' ,lazy="joined" )
    products = relationship('Product' , secondary = 'pers_prod_rel' , backref='personas' ,lazy="joined" )

class PersonaSchema(ma.ModelSchema):
    roles = ma.Nested(PersonaRoleSchema, many=True)
    products = ma.Nested(ProductSchema, many=True)

    class Meta:
        model = Persona
        sqla_session = db.session


# INSIGHTS ---------------------------------------------------------------------
class Insight(db.Model):
    __tablename__ = 'insight'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    content = db.Column(db.Text)
    file = db.Column(db.Text)
    experience_vector = db.Column(db.Text)
    magnitude = db.Column(db.Integer)
    frequency = db.Column(db.Text)
    emotions = db.Column(db.Text)
    props = db.Column(db.Text)
    journey = db.Column(db.Text)
    archived = db.Column(db.Boolean, default = False)
    create_date = db.Column(db.DateTime,
                            default=datetime.utcnow)
    revision = db.Column(db.Integer, default = 0)
    creator_id = db.Column(db.Integer, default = None)

class InsightSchema(ma.ModelSchema):
    class Meta:
        model = Product
        sqla_session = db.session

class InsightComments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    source_id = db.Column(db.Integer,ForeignKey('persona.id'))
    comment_body = db.Column(db.Text)
    creator_id = db.Column(db.Integer, default = None)
    action = db.Column(db.Text)
    downchange = db.Column(db.Text)
    upchange = db.Column(db.Text)
    create_date = db.Column(db.DateTime,
                            default=datetime.utcnow)

class InsightCommentsSchema(ma.ModelSchema):
    class Meta:
        model = InsightComments
        sqla_session = db.session

# USER -------------------------------------------------------------------------
