function outputInfo(firstName, lastname, position = 'designer') 
{
    alert(`The developer of this page is ${firstName} ${lastname}, the position of this person is ${position}`)
}

outputInfo('Kristina', 'Tripak')
outputInfo('Kristina', 'Tripak', 'Python developer')