import * as React from 'react';
import { useState } from 'react';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image,
    TextInput, TouchableOpacity
} from 'react-native';
import { color } from '../constant/color';
import { useDispatch } from 'react-redux';
import { authenticate } from '../store/actions/auth';

const Authenticate = (props) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [err, setErr] = useState();
    const emailHandler = emailText => {
        setEmail(emailText)
    }

    const passwordHandler = passwordText => {
        setPassword(passwordText)
    }
    const dispatch = useDispatch();
    const submitHandler = React.useCallback(async (emaild, pass, login) => {
        try {
            setErr(null)
            await dispatch(authenticate(emaild, pass, login));
            props.navigation.navigate('wellcome')
        } catch (error) {
            setErr(error);
        }

    }, [])
    React.useEffect(() => {
        if (err) {
            Alert.alert(
                "Error",
                err.message,
                [
                    {
                        text: "Okay",
                        style: "cancel"
                    }
                ]
            )
        }
    }, [err])
    return (<View>
       
        <ScrollView>
            <View style={styles.formContainer}>
                <View style={styles.logo}>
                    <Image
                        style={{
                            width: '100%',
                            height: 200,
                        }}
                        source={require('../assets/images/logo.png')}
                    />
                </View>
            <View style={styles.headeContainer}>
                <Text style={styles.headerTitle}> {isLoginMode ? 'sign In' : 'Sign Up'}</Text>
            </View>
            <TextInput placeholder="Type  Email.."
                blurOnSubmit
                keyboardType="default"
                email
                style={{ ...styles.input, borderColor: emailErr ? 'red' : '#192734' }}
                value={email}
                onChangeText={emailHandler}
                onBlur={() => {
                    if (email.length == 0) {
                        setEmailErr(true);
                    } else setEmailErr(false);
                }
                }
            />{emailErr && <Text style={{ color: 'red', paddingHorizontal: 15 }}>Email is required</Text>}
            <TextInput placeholder="Type Password"
                testID="title"
                style={{ ...styles.input, borderColor: passwordErr ? 'red' : '#192734' }} value={password}
                onChangeText={passwordHandler}
                secureTextEntry
                onBlur={() => {
                    if (password.length == 0 || password.length < 6) {
                        setPasswordErr(true);
                    } else setPasswordErr(false);
                }
                }
            />{passwordErr && <Text style={{ color: 'red', paddingHorizontal: 15 }}>Password should be at least 6 characters</Text>}

            <TouchableOpacity
                style={{ overflow: 'hidden' }}
                onPress={() => {
                    submitHandler(email, password, isLoginMode)
                }}
            >
                <View style={styles.buttonContainer}>
                    {isLoginMode && <Text style={styles.buttton}>Sign In</Text>}
                    {!isLoginMode && <Text style={styles.buttton}>Sign Up</Text>}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setIsLoginMode(prevState => !prevState)
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                    <Text style={{ fontFamily: 'open-sans-bold', color: color.primary }}>Switch To {isLoginMode ? 'sign Up' : 'Sign In'}</Text>
                </View>
            </TouchableOpacity>
        </View>

        </ScrollView>
    </View>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,
        backgroundColor: '#fafafa',
        padding: 20,
        paddingVertical:60,
        borderRadius: 20,
        marginVertical: 100,
        marginHorizontal: 20,
        overflow: 'hidden',
    },
    input: {
        borderWidth: 0.1,
        borderColor: '#192734',
        borderRadius: 3,
        margin: 10,
        padding: 15
    },
    buttonContainer: {
        backgroundColor: color.primary,
        width: '50%',
        height: 50,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 70,
      



    },
    buttton: {
        color: 'white'
    },
    headerTitle: {
        fontSize: 25,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        color: color.primary,
        textTransform: 'uppercase',
        textDecorationColor: 'pink',
        textDecorationStyle: 'double',
        textShadowColor: 'pink',
        textShadowRadius:5
    },
    headeContainer: {
        marginTop: 10,
        marginBottom:20
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -60,
        marginHorizontal:-20
    }
})
export default Authenticate;