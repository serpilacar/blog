---
templateKey: blog-post
title: 'With Expo or without Expo, that is the question!'
date: '2018-09-09T21:56:45+03:00'
description: Is it worth it to develop your React Native app using Expo?
tags:
  - react native
  - create react native app
  - expo
---

First things first, I started a regular React Native project with react-native init then agreed on starting with create-react-native-app  would be sufficient for this app and then ejected from it.

TL;DR: if you are certain your app won't be needing native functionality other than Expo currently provides, you are good to go! But don't you forget: Clients are unpredictable. Ejecting from create-react-native-app after building fully functional cross-platform app with 28 screens in total would bore you… a lot.

Developing cross-platform native mobile apps with single (nearly, I'll come to that later) programming language? By only writing javascript? Can you imagine how stirring it was for an enthusiastic frontend developer?
I'm going to keep it short about alternatives. There were few frameworks when I discovered this was possible: PhoneGap, Ionic, Xamarin and React Native. First three are only allowing you to develop hybrid apps. Which totally sucks because they are in fact "*small websites running in a browser shell in an app that have access to the native platform layer*". But I'm not here to talk about those! It's time to talk about React Native and Expo.
Huge benefits of creating your mobile app with Expo and React Native are:
- You only write JavaScript and it actually works on both platforms! You don't need to get your hands dirty(!) on Objective-C or Java code,
- You don't need Android Studio or Xcode to build the app,
- Expo guys make it really easy to use native modules like maps and push notifications, so you don't need to spend much time to *make it work*.

For the huge part of the development process you totally rely on Expo. If Expo servers have some issues, then you are done! Some personal experiences I recall:
- Since you don't have any native code, you have to use expo-cli or xde to create IPA and APK for stores. You can't use Xcode or Android Studio.
- You have to use their [their push notification service](https://docs.expo.io/static/images/generated/v29.0.0/guides/sending-notification.png "Expo push notification flow"). When you notice push notifications are not delivered and your client wants to try them out at that exact time, umm, good luck!
- Their support is not helpful enough. They have [a page](https://status.expo.io "Expo status") so you can view past or current Expo system incidents but when I had issues I have never saw them on this page. On the other hand when I did contact to the Expo support, after couple of hours later they always confirmed the problem.
- Expo builds are huge. In our case; you get more than double size of React Native with native code in Android builds but in IOS it's 4 times larger!

Expo is great for personal projects and React Native newbies. It let's you observe you can build an app by just writing JavaScript and built-in native modules. But it won't meet the needs of a complex app intended to be sent to the stores.