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
          title='Hide discord titlebar (enable frame in config.json)'
          plugin={this.props.plugin}
          lsNode='guild.hideTitlebar'
          defaultValue={false}
        />

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

        <div>
          <div
            className='flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-v6g9vO'
            style={{
              flex: '1 1 auto'
            }}
            key='title'
          >
            <Title text='Guild Columns' />
          </div>
          <Select
            options={['1', '2', '3']}
            plugin={this.props.plugin}
            lsNode='guild.width'
            defaultValue={'1'}
          />
        </div>
      </div>
    )
  }
}
