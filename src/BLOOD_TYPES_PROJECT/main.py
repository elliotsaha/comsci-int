class BloodType:
    def __init__(self, bloodType):
        self.allBloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
        if bloodType not in self.allBloodTypes:
            raise ValueError("ERR: Valid blood type not provided")
        self.bloodType = bloodType
        self.antigens = self.destructureBloodType(bloodType)

    def destructureBloodType(self, bloodType):
        # turn every character in bloodType into a list iterable
        bloodTypeList = list(bloodType)
        # O is not a valid antigen, so it is removed from beginning
        if 'O' in bloodTypeList:
            bloodTypeList.pop(0)
        # + automatically turns into D antigen / Rh factor
        if '+' in bloodTypeList:
            bloodTypeList[-1] = 'D'
        # - means that D antigen / Rh factor is simply not present, so it is removed from list
        if '-' in bloodTypeList:
            bloodTypeList.pop()
        return bloodTypeList

    def composeBloodType(self, destructureBloodType):
        if 'D' in destructureBloodType:
            destructureBloodType[-1] = '+'
        else:
            destructureBloodType.append('-')
        return ''.join(destructureBloodType)

    def getAllDestructuredBloodTypes(self):
        destructureBloodTypeList = []
        for x in self.allBloodTypes:
            destructureBloodTypeList.append(self.destructureBloodType(x))
        return destructureBloodTypeList

    def getBloodType(self):
        return self.bloodType

    def getAntigens(self):
        return 'Antigens include: {0}'.format(','.join(self.antigens))

    def getAntibodies(self):
        antibodies = ['A', 'B', 'D']
        for antigen in self.antigens:
            if antigen in antibodies:
                antibodies.remove(antigen)
        return 'Antibodies include: {0}'.format(','.join(antibodies))

    def canGiveBloodTo(self):
        canGiveBloodToList = []
        destructureBloodTypeList = self.getAllDestructuredBloodTypes()[:-2]
        for i in destructureBloodTypeList:
            if set(self.antigens).issubset(set(i)):
                canGiveBloodToList.append(self.composeBloodType(i))

        if self.bloodType not in canGiveBloodToList:
            canGiveBloodToList.append(self.bloodType)

        if self.bloodType == "O-":
            canGiveBloodToList.append("O+")

        return '{0} people can give to people who have these blood types: {1}'.format(self.bloodType, ','.join(canGiveBloodToList))

    def canRecieveBloodFrom(self):
        canRecieveBloodToList = ["O-"]
        if "D" in self.destructureBloodType(self.bloodType):
            canRecieveBloodToList.append("O+")

        destructureBloodTypeList = self.getAllDestructuredBloodTypes()[:-2]
        for i in destructureBloodTypeList:
            if set(i).issubset(set(self.antigens)):
                canRecieveBloodToList.append(self.composeBloodType(i))

        if self.bloodType not in canRecieveBloodToList:
            canRecieveBloodToList.append(self.bloodType)

        return '{0} people can recieve blood from people who have these blood types: {1}'.format(self.bloodType, ','.join(canRecieveBloodToList))




APositive = BloodType("O-")
print(APositive.composeBloodType([]))



