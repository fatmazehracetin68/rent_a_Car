import ReactSelect from "react-select";
import { fuels } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();
  const selected = {
    label: params.get("fuel_type"),
    value: params.get("fuel_type"),
  };

  return (
    <div>
      <ReactSelect
        options={fuels}
        onChange={(e) => {
          params.set("fuel_type", e?.value as string);
          setParams(params);
        }}
        className="text-black"
        defaultValue={selected}
      />
    </div>
  );
};

export default Filter;
