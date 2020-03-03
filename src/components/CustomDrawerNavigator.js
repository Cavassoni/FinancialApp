
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';

// https://oblador.github.io/react-native-vector-icons/
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'native-base';


export default class CustomDrawerNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSubMenuNoticias: false
    }
  }

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  click(navigation, screen) {
    this.setState({ showSubMenuNoticias: false })
    navigation.toggleDrawer();
    navigation.navigate(screen);
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.click(navigation, 'Trades')}
          style={styles.itemMenu}
        >
          <Icon name='trending-up' style={styles.icon} />
          <Text style={styles.textItemMenu}>Trades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.click(navigation, 'Analise')}
          style={styles.itemMenu}
        >
          <IconMaterialCommunityIcons name='chart-line' style={styles.icon} />
          <Text style={styles.textItemMenu}>Análises</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.click(navigation, 'FearAndGreed')}
          style={styles.itemMenu}
        >
          <IconFontAwesome name='dashboard' style={styles.icon} />
          <Text style={styles.textItemMenu}>Fear and Greed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showSubMenuNoticias: !this.state.showSubMenuNoticias })
          }}
          style={styles.itemMenu}
        >
          <IconFontAwesome name='newspaper-o' style={styles.icon} />
          <Text style={[styles.textItemMenu, this.state.showSubMenuNoticias ? { marginBottom: 5 } : null]}>Notícias</Text>
        </TouchableOpacity>
        {this.state.showSubMenuNoticias && (
          <View style={styles.subItemMenu}>
            <TouchableOpacity
              onPress={() => this.click(navigation, 'NoticiasFinMov')}
              style={styles.itemMenu}
            >
              <IconEntypo name='news' style={styles.icon} />
              <Text style={styles.textSubItemMenu}>Financial Move</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.click(navigation, 'NoticiasGerais')}
              style={styles.itemMenu}
            >
              <IconEntypo name='news' style={styles.icon} />
              <Text style={styles.textSubItemMenu}>Gerais</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => this.click(navigation, 'Pagamento')}
          style={styles.itemMenu}
        >
          <IconMaterialCommunityIcons name='credit-card-plus' style={styles.icon} />
          <Text style={styles.textItemMenu}>Pagamento</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  textItemMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
    margin: 5,
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 2
  },
  textSubItemMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
    margin: 5,
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: 2
  },
  itemMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  subItemMenu: {
    marginLeft: 20
  },
  icon: {
    fontSize: 25,
    color: '#fff'
  }
})