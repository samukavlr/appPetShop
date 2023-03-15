import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 55,
    color: '#10abd4',
    textShadowColor: '#00000029',
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 6,
    bottom:100,
  },
  logo: {
    width: 232,
    height: 242,
    bottom:70,
  },
  input: {
    width: 330,
    height: 60,
    borderWidth: 1,
    borderColor: '#ffff',
    backgroundColor:'#ffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 25,
  },
  criarconta: {
    width: 330,
    height: 60,
    flexDirection:'row',
    paddingHorizontal: 10,
    marginBottom: 15,
    justifyContent:'space-between'
  },
  textcriaraconta: {
    fontSize: 12,
    color: '#10abd4',
    
    
  },
  button: {
    width: 332,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonlogar: {
    color: '#0000',
    width: 332,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: 30,
    flexDirection:'row',
    
    paddingHorizontal: 10,
    alignItems:'center',
  },
  icon: {
    width: 50,
    height: 50,
    alignItems:'center'
  },

  buttonText: {
    fontWeight: 'bold',
    
    color: '#10abd4',
    fontSize: 25,
    paddingHorizontal: 30,
    
  },
  buttonTextgoogle: {
    fontWeight: 'bold',
    color: '#70707070',
    fontSize: 18,
    paddingHorizontal: 30,
    
  },
  
});
