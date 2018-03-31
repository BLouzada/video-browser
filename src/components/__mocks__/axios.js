module.exports = {
  get: jest.fn((url) => {    
    return Promise.resolve({
      data: {
        items: []
      }
    });
  }),
};