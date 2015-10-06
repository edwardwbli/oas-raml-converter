function Project(name) {
  this.name = name
  this.description = ''
  this.groups = []
  this.endpoints = []
  this.schemas = []
  this.securityDefinitions = []
  this.environment = {
    basePath: '',
    host: ''
  }
}

Project.prototype = {
  set Description(desc) {
    this.description = desc
  },
  get Name() {
    return this.name
  },
  get Description() {
    return this.description
  },
  get Endpoints() {
    return this.endpoints
  },
  set Endpoints(endpoints) {
    this.endpoints = endpoints
  },
  get Groups() {
    return this.groups
  },
  set Groups(groups) {
    this.groups = groups
  },
  get Schemas() {
    return this.schemas
  },
  set Schemas(schemas) {
    this.schemas = schemas
  },
  get Environment() {
    return this.environment
  },
  set Environment(env) {
    this.environment = env
  },
  addEndpoint:function(endpoint) {
    this.endpoints.push(endpoint)
  },
  addGroup:function(group) {
    this.groups.push(group)
  },
  addSchema: function(schema) {
    this.schemas.push(schema)
  }
}

module.exports = Project