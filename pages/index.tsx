import {
  CounterContext,
  CounterJotai,
  CounterRecoil,
  CounterRedux,
  CounterLib,
  FormLib,
  CounterUnstated,
  CounterZustand,
  FormContext,
  FormJotai,
  FormRecoil,
  FormRedux,
  FormUnstated,
  FormZustand,
} from "@/screens";

export default function Home() {
  return (
    <div>
      <div>
        <p>Context :</p>
        <CounterContext />
        <FormContext />
      </div>

      <div>
        <p>Zuztand :</p>
        <CounterZustand />
        <FormZustand />
      </div>

      <div>
        <p>Recoil :</p>
        <CounterRecoil />
        <FormRecoil />
      </div>

      <div>
        <p>Jotai :</p>
        <CounterJotai />
        <FormJotai />
      </div>

      <div>
        <p>Unstated :</p>
        <CounterUnstated />
        <FormUnstated />
      </div>

      <div>
        <p>Redux :</p>
        <CounterRedux />
        <FormRedux />
      </div>

      <div>
        <p>My Lib :</p>
        <CounterLib />
        <FormLib />
      </div>
    </div>
  );
}