class BaseController {
  constructor(model) {
    this.model = model;
  }

  // [GET] /items
  async getAll(req, res) {
    try {
      const docs = await this.model.find({});
      res.json(docs);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  // [GET] /items/:id
  async getOne(req, res) {
    try {
      const doc = await this.model.findById(req.params.id);
      if (!doc) {
        return res.status(404).send('Not found');
      }
      res.json(doc);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  // [POST] /items
  async create(req, res) {
    try {
      const doc = new this.model(req.body);
      await doc.save();
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  // [PUT] /items/:id
  async update(req, res) {
    try {
      const doc = await this.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!doc) {
        return res.status(404).send('Not found');
      }
      res.json(doc);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  // [DELETE] /items/:id
  async delete(req, res) {
    try {
      const doc = await this.model.findByIdAndDelete(req.params.id);
      if (!doc) {
        return res.status(404).send('Not found');
      }
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = BaseController;
