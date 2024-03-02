const path = require('path')

module.exports = [
  {
    path: path.join('../../apps/web/public/indices', 'experiments.json'),
    query: `*[_type == 'experiments' && !(_id in path('drafts.**')) && !completed] {
      ...,
      "control": control->path,
      variants[]{weight, "path": page->path}
    }`,
  },
]
