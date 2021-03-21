## Some more Info about the Birdy Slim (IoT) Pager


- first 5 Characters of a Message can be used a MessageID, IF enabled per SubRIC
![image](https://user-images.githubusercontent.com/63829136/111872229-0ceaae00-898e-11eb-84d0-abfec9250c6b.png)



BirdySlim/Lite/IoT  ChipID 0x14762402 / STM32

Debugpaths in Programming Software

`C:\RAD Studio\Projets\TPL\Lib\TPLBirdy.birdySTM32.pas`
`BirdySTM32 : const_BirdyIOTE2PSIZE<"FIN_E2P_BirdyIOT`
`BirdySTM32 : const_BirdyLiteE2PSIZE<"FIN_E2P_BirdyLite`

References to
`TPLpagersAS.dll`
`"skryptTPLPagers.dll", "s_TPL_PluginDll.dll", "sAS.dll","DIS49.dll","s_Distributor_PluginDll.dll","s_eMessage.dll","s_eTech.dll", "H1errorOnlyTPLpagers.dll", "Dll2.dll", "ductionPlugin.dll", "s_noLimitFpocsag_Plugin.dll", "lGermanOTATPLPagers.dll" und "32.dll"` (all of them unused, forgotten)

`"S2P256TPLPagers.dll" (keyFileValidation=>getS2P256String=>getS2P256SettingsFct=>...=>loadEncryptionFile=>loadEncryptionFileByRic=>RazS2P256)`

`"SlimLicenseTPLPagers.dll" (getTXlicenceCdeLabel=>..=>getDatasForTXLicence=>getDatasForModeLicence)`

`"SlimSigfoxTPLPagers.dll" (getSIGFOXLicenceCdeLabel=..=>>getDatasForSIGFOXparams.=>..)`

`"SDIS34TPLPagers.dll" (...`
`"SDIS57TPLPagers.dll" (...`
`"ftd2xx.dll" ...`
