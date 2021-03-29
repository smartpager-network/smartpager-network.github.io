## Some more Info about the Birdy Slim (IoT) Pager


- OTA Time "#ZEIT=hhmmDDMMYY#ZEIT=hhmmDDMMYY"

- first 5 Characters of a Message can be used a MessageID, IF enabled per SubRIC
![image](https://user-images.githubusercontent.com/63829136/111872229-0ceaae00-898e-11eb-84d0-abfec9250c6b.png)



BirdySlim/Lite/IoT  ChipID 0x14762402 / STM32
![image](https://user-images.githubusercontent.com/63829136/111890158-25d37d80-89e7-11eb-89ea-235593a53c2d.png)


Debugpaths in Programming Software

`C:\RAD Studio\Projets\TPL\Lib\TPLBirdy.birdySTM32.pas`
`BirdySTM32 : const_BirdyIOTE2PSIZE<"FIN_E2P_BirdyIOT`
`BirdySTM32 : const_BirdyLiteE2PSIZE<"FIN_E2P_BirdyLite`

References to
`TPLpagersAS.dll`
`"skryptTPLPagers.dll", "s_TPL_PluginDll.dll", "sAS.dll","DIS49.dll","s_Distributor_PluginDll.dll","s_eMessage.dll","s_eTech.dll", "H1errorOnlyTPLpagers.dll", "Dll2.dll", "ductionPlugin.dll", "s_noLimitFpocsag_Plugin.dll", "lGermanOTATPLPagers.dll" & "32.dll"` (all of them unused, forgotten)

`"S2P256TPLPagers.dll" (keyFileValidation=>getS2P256String=>getS2P256SettingsFct=>...=>loadEncryptionFile=>loadEncryptionFileByRic=>RazS2P256)`

`"SlimLicenseTPLPagers.dll" (getTXlicenceCdeLabel=>..=>getDatasForTXLicence=>getDatasForModeLicence)`

`"SlimSigfoxTPLPagers.dll" (getSIGFOXLicenceCdeLabel=..=>>getDatasForSIGFOXparams.=>..)`

`"SDIS34TPLPagers.dll" (...`
`"SDIS57TPLPagers.dll" (...`
`"ftd2xx.dll" ...`



![image](https://user-images.githubusercontent.com/63829136/111890129-fa509300-89e6-11eb-957f-18489c10ef62.png)


XML Schema:
```<?xml version="1.0" encoding="utf-16"?>
<!-- XML Schemae schema for TPL systèmes pager customization -->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
    <xs:annotation>
        <xs:documentation>TPL Systèmes, fichier personnalisation</xs:documentation>
    </xs:annotation>
    <xs:simpleType name="UINT32">
        <xs:annotation>
            <xs:documentation>Unsigned integer 0x00 to 0xFFFFFFFF</xs:documentation>
        </xs:annotation>
        <xs:restriction base="xs:unsignedInt" />
    </xs:simpleType>
    <xs:complexType name="ApplicationDescription">
        <xs:sequence>
            <xs:element name="nom" type="xs:string" default="Unknown" />
            <xs:element name="version" type="xs:string" default="0.00.0" />
        </xs:sequence>
    </xs:complexType>
    <xs:simpleType name="ProductID">
        <xs:restriction base="UINT32">
            <xs:minInclusive value="1" />
        </xs:restriction>
    </xs:simpleType>
    <xs:simpleType name="BooleanInUINT">
        <xs:restriction base="UINT32">
            <xs:minInclusive value="0" />
            <xs:maxInclusive value="1" />
        </xs:restriction>
    </xs:simpleType>
    <xs:complexType name="ProductDescription">
        <xs:sequence>
            <xs:element name="id" type="ProductID" />
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="CustomizationDefinition">
        <xs:sequence>
            <xs:element name="complet" type="BooleanInUINT" default="1" />
            <xs:element name="libelle" type="xs:string" default="For TPL pager, rev2 format" />
            <xs:element name="timeZone" type="xs:string" default="" minOccurs="0" maxOccurs="1" />
        </xs:sequence>
    </xs:complexType>
    <xs:simpleType name="E2Pline">
        <xs:restriction base="xs:string">
            <xs:pattern value="([0123456789ABCDEF])*" />
        </xs:restriction>
    </xs:simpleType>
    <xs:simpleType name="HEX_number">
        <xs:restriction base="xs:string">
            <xs:pattern value="0x([0123456789ABCDEF])*" />
        </xs:restriction>
    </xs:simpleType>
    <xs:complexType name="E2PdataLine">
        <xs:simpleContent>
            <xs:extension base="E2Pline">
                <xs:attribute name="ad" type="HEX_number" />
                <xs:attribute name="lg" type="HEX_number" />
            </xs:extension>
        </xs:simpleContent>
    </xs:complexType>
    <xs:complexType name="TPLpagerEEPROM">
        <xs:sequence>
            <xs:element name="data" type="E2PdataLine" minOccurs="1" maxOccurs="unbounded">
                <xs:unique name="oneDataAdr">
                    <xs:selector xpath="data" />
                    <xs:field xpath="@ad" />
                </xs:unique>
            </xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="CustomizationContent">
        <xs:sequence>
            <xs:element name="content_E2P" type="TPLpagerEEPROM" />
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="CustomizationDescription">
        <xs:sequence>
            <xs:element name="produit" type="ProductDescription" />
            <xs:element name="perso_def" type="CustomizationDefinition" />
            <xs:element name="perso_content" type="CustomizationContent" />
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="TPL_Pager_Customization_Content">
        <xs:sequence>
            <xs:element name="appli" type="ApplicationDescription" />
            <xs:element name="perso" type="CustomizationDescription" />
        </xs:sequence>
    </xs:complexType>
    <xs:element name="TPL" type="TPL_Pager_Customization_Content" />
</xs:schema>
```
