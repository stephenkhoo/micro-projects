// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

function page(name, entry, filename, title) {
  return {
    template: 'public/index.html',
    entry, filename, title,
    chunks: ['chunk-vendors', 'chunk-common', name]
  }
}

module.exports = {
  pages: {
    index: page('index', 'src/v-system/main.js', 'v-system/index.html', 'V-system Landing'),
    entry: page('entry', 'src/v-system/entry.js', 'v-system/entry.html', 'V-system Entry'),
    report: page('report', 'src/v-system/report.js', 'v-system/report.html', 'V-system Report'),
    record: page('record', 'src/v-system/record.js', 'v-system/record.html', 'V-system Record'),
  }
}
