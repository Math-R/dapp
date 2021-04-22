import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Drizzle Examples</h1>
        <p>
          Examples of how to get started with Drizzle in various situations.
        </p>
      </div>
      <div className="section">
        <h2>Shipping</h2>
        <p>
          Test du contrat Shipping
        </p>
        <p>
          <strong>Status de l'envoi : </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Shipping"
            method="getState"
          />
          </p>
          <p><strong>Adresse du client: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Shipping"
            method="receiver"
          />
          </p>
          <p><strong>Adresse du transporteur: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Shipping"
            method="sender"
          />
          </p>
          <div><p>Confirmation de la commande : utiliser un premier compte</p>
          <ContractForm drizzle={drizzle} contract="Shipping" method="confirmOrder" />
          </div>
          <div><p>Confirmation de l'envoi : utiliser un deuxieme compte</p>
          <ContractForm drizzle={drizzle} contract="Shipping" method="confirmShipping" />
          </div>
          <div><p>Confirmation de la réception : utiliser le 1er compte</p>
          <ContractForm drizzle={drizzle} contract="Shipping" method="confirmReceived" />
          </div>
      </div>
    </div>
  );
};
