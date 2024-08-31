class BaseController {
  constructor(model) {
    this.model = model;
  }

  // [GET] /items
  async getAll(req, res, next) {
    try {
      const docs = await this.model.find({});
      res.json(docs);
    } catch (err) {
      next(err);
    }
  }

  // [GET] /items/:id
  async getOne(req, res, next) {
    try {
      const doc = await this.model.findById(req.params.id);
      if (!doc) {
        res.status(404);
        next(new Error.send('Not found'));
        return; 
      }
      res.json(doc);
    } catch (err) {
      res.status(500);
      next(err);
    }
  }

  // [POST] /items
  async create(req, res, next) {
    try {
      const doc = new this.model(req.body);
      await doc.save();
      res.status(201).json(doc);
    } catch (err) {
      res.status(400);
      next(err);
    }
  }

  // [PUT] /items/:id
  async update(req, res, next) {
    try {
      const doc = await this.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!doc) {
        res.status(404);
        next(new Error.send('Not found'));
        return; 
      }
      res.json(doc);
    } catch (err) {
      res.status(400);
      next(err);
    }
  }

  // [DELETE] /items/:id
  async delete(req, res, next) {
    try {
      const doc = await this.model.findByIdAndDelete(req.params.id);
      if (!doc) {
        res.status(404);
        next(new Error.send('Not found'));
        return; 
      }
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500);
      next(err);
    }
  }
}

module.exports = BaseController;
