const { Theme } = require('elements')

module.exports = class hooks extends Theme {
  load () {
    this.registerSettingsTab('NippIt Settings', require('./Settings'))
    this.updateTheme()
  }

  settingsChanged () {
    this.updateTheme()
  }

  updateTheme () {
    if (this.getSettingsNode('guild.hideTitlebar', false)) {
      document.body.classList.add('nippit-hidetitlebar')
    } else {
      document.body.classList.remove('nippit-hidetitlebar')
    }

    if (this.getSettingsNode('guild.selectedFirst', false)) {
      document.body.classList.add('nippit-guild-selectedfirst')
    } else {
      document.body.classList.remove('nippit-guild-selectedfirst')
    }

    if (this.getSettingsNode('guild.unreadSecond', false)) {
      document.body.classList.add('nippit-guild-unreadsecond')
    } else {
      document.body.classList.remove('nippit-guild-unreadsecond')
    }

    document.body.classList.remove(
      'nippit-guild-scrollerwidth1',
      'nippit-guild-scrollerwidth2',
      'nippit-guild-scrollerwidth3'
    )
    document.body.classList.add(
      'nippit-guild-scrollerwidth' + this.getSettingsNode('guild.width', '1')
    )
  }

  get iconURL () {
    return 'data:image/png;base64,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'
  }
}
