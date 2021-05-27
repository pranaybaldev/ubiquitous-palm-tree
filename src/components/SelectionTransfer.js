import React from 'react'
import { Transfer} from 'antd';

const mockData = [];
let fileData = localStorage.getItem('fileData')
let csvColumns = fileData.split('\n') //rows
csvColumns = csvColumns[0].split(',')

for (let i = 0; i < csvColumns.length; i++) {
  mockData.push({
    key: csvColumns[i].toString(),
    title: csvColumns[i],
    description: `description`,
    disabled: false,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

class SelectionTransfer extends React.Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
    localStorage.setItem('selection', nextTargetKeys.toString());
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={disabled}
          oneWay
          style={{ marginBottom: 30, justifyContent: 'center', marginTop: 30 }}
          listStyle={{
            width: 250,
            height: 400,
          }}
        />
      </>
    );
  }
}

export default SelectionTransfer;
