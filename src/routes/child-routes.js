export default (pathName, requirePath, store) => ({
  path: pathName,
  getComponent (nextState, cb) {
    cb(null, require(requirePath).default);
  }
})
