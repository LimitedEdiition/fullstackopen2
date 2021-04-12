import Button from './Button'
import InputChange from './InputChange'

const PersonForm = ({onSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => <form onSubmit = {onSubmit} >
    <div>
        <InputChange text='Name' value={newName} onChange = {handleNameChange} />
        <InputChange text='Number' value={newNumber} onChange = {handleNumberChange} />
        <div>
            <Button text='Add' type="submit" />
        </div>
    </div>
</form>

export default PersonForm