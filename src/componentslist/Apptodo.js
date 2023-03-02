import React from 'react'
import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'
const Apptodo = () => {
    var [Enter, setEnter] = useState("");
    var [todo, settodo] = useState([]);
    var DIDValue = (e) => {
        setEnter(e.target.value);
    }
    var saveTodo = () => {
        let uservalue = Enter;
        uservalue.trim();
        if (uservalue !== '') {
            settodo(todo => [...todo, uservalue]);
            setEnter('');
        }
    }
    var clearList = () => {
        settodo([]);
    }
     return (
    <div className='todo-container'>
        <Box component='div' sx={{ width : '40%', m: 'auto', p: 10, border: '3px solid green', background:'pink'}}>
           <Typography variant='h5' sx={{color: 'red', pb: 2}}> Application For TO-DO</Typography>
            <div id="todo-text">
                <TextField value={Enter} label="List To Do" variant="standard" onChange={DIDValue} />
                <Button variant='contained' color='error' onClick={saveTodo}>Submit</Button>
            </div>
          
            {todo.length > 0 ? 
                <div id="todo">
                   <List>
                        {todo.map((data, i) => (
                            <ListItem key={i} sx={{ display: 'list-item',listStyleType: 'decimal', textTransform: 'capitalize'}}>
                                {data}  
                            </ListItem> 
                        ))}
                   </List>
                  
                    <Button variant='contained' color='blue' onClick={clearList}>Clear List</Button>
                
                </div>
                :<Typography variant='p'>List To Do</Typography>
                
            }
        </Box>

    </div>
  )
}

export default Apptodo
