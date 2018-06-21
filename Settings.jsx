const React = require('react')
const { PureComponent } = React
const {
  SettingsOptionToggle: Toggle,
  SettingsOptionSelect: Select,
  SettingsOptionTitle: Title
} = require('elements')

module.exports = class Settings extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Toggle
          title='Set selected guild as first item'
          plugin={this.props.plugin}
          lsNode='guild.selectedFirst'
          defaultValue={false}
        />
        <Toggle
          title='Give unread guilds high priority'
          plugin={this.props.plugin}
          lsNode='guild.unreadSecond'
          defaultValue={false}
        />
      </div>
    )
  }
}
