
if __name__ == '__main__':
  from src.application import create_app
  app = create_app()
  app.run(host='0.0.0.0')