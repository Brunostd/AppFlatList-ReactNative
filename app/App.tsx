import {Component, ReactNode} from 'react';
import React, {FlatList, View} from 'react-native';
import Pessoa from './list/Pessoa';

interface FlatListStates {
  listObject: FlatListObject[];
}

interface FlatListObject {
  name: string;
  numero: string;
  email: string;
}

class App extends Component<{}, FlatListStates> {
  constructor(props: {}) {
    super(props);
    let auxListObject: FlatListObject[] = [
      {name: 'Bruno', numero: '(88)8888-8888', email: 'teste@gmail.com'},
      {name: 'Buster', numero: '(88)8888-8888', email: 'teste@gmail.com'},
      {name: 'Scrugs', numero: '(88)8888-8888', email: 'teste@gmail.com'},
    ];
    this.state = {
      listObject: auxListObject,
    };
  }

  render(): ReactNode {
    return (
      <View>
        <FlatList
          data={this.state.listObject}
          keyExtractor={item => item.name}
          renderItem={({item}) => <Pessoa item={item} />}
        />
      </View>
    );
  }
}

export default App;
