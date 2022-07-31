function dialogWithUser()
{
    let sum = '';
    while (true) 
    {
        let value = prompt("Write the names of the singers who songs you want to see on the site", '');
        if (!value) break;
        sum += value;
    }
    alert( 'Names ' + sum );
}