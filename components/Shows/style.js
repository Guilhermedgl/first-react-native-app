import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    padding: 15,
    margin: 2,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
  },
  image: {
    height: 150,
    width: 90,
  },
  title: {
    fontSize: 18,
    width: 220,
    fontWeight: 'bold',
    color: '#333',
  },
  textContainer: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    color: '#999',
    marginTop: 10,
    lineHeight: 20,
  },
  touchText: {
    fontSize: 14,
    color: '#f4511e',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  touch: {
    marginTop: 10,
    borderColor: '#f4511e',
    width: 110,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
