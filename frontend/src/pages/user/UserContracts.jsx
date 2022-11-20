import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dimmer, Grid, List, Loader, Tab } from 'semantic-ui-react'
import ContractItem from '../../components/contracts/ContractItem'
import {getUserContracts, reset as contractReset} from '../../features/contracts/contractSlice';

function UserContracts() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.auth);
    const {contracts, contractError, contractMessage, contractLoading} = useSelector((state)=> state.contract)
    const ongoing = contracts.filter(contract => contract.status==='ongoing');
    const finished = contracts.filter(contract => contract.status==='finished');
    const terminated = contracts.filter(contract => contract.status==='terminated');

    useEffect(()=> {
      if(contractError) {
        toast.error(contractMessage);
      }
      if(!user ) {
        navigate('/login')
      }
      if(user.session === 'client') {
        console.log(user.session);
        navigate('/dashboard')
      }
      dispatch(getUserContracts(user.id));
      return ()=> {
        dispatch(contractReset());
      }
    },[user, dispatch, navigate, contractError])
    let panes;

    panes = [
      { menuItem: 'All', render: () =>
      <Tab.Pane style={{minHeight: '300px'}}>
        <List style={{minHeight:'300px'}} animated   divided relaxed>
          {
            contracts.map(contract => <ContractItem contract={contract} />)
          }
        </List>
      </Tab.Pane> },
      { menuItem: 'Active', render: () =>
      <Tab.Pane style={{minHeight: '300px'}}>
        <List style={{minHeight:'300px'}} animated   divided relaxed>
          {
            ongoing.map(contract =><ContractItem  contract={contract}/> )
          }

        </List>
      </Tab.Pane> },
      { menuItem: 'Finished', render: () =>
      <Tab.Pane style={{minHeight: '300px'}}>
        <List style={{minHeight:'300px'}} animated   divided relaxed>
          {
            finished.map(contract=> <ContractItem contract={contract}/>)
          }

        </List>
      </Tab.Pane> },
      { menuItem: 'Terminated', render: () =>
      <Tab.Pane style={{minHeight: '300px'}}>
        <List style={{minHeight:'300px'}} animated   divided relaxed>
          {
            terminated.map(contract=> <ContractItem contract={contract}/>)
          }
        </List>
      </Tab.Pane> },
    ];
    if(contractLoading) {
      return (
        <>
        <Dimmer>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        </>
      )
    }

    return (
      <>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={16}>
            <Tab  style={{padding: '40px'}} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
}

export default UserContracts
