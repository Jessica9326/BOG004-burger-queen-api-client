import "../../css/readyOrder.scss";


const ReadyOrder = (props) => {
  console.log('readyOrder', props.product);
  const handleClick = () => {
    props.addDeliveredOrder({ client: props.client, timeOrd: props.timeOrd, id: props.id });
    props.resetReadyOrder(props.id);
  };

  return (
    <div className="container-ready">
      <section className="container-order">
        <p className="clientName">Cliente: {props.client}</p>
        <div>
          {props.product.map((product) => {
            return (
              <section
                className="amount-product"
                key={"order-product-" + product.id}
              >
                <div className="amount">{product.quantity}</div>
                <div className="product-name">{product.name}</div>
              </section>
            );
          })}
        </div>
        <div className="dataEntry">{props.dateProcessed}</div>
        <button type="button" className="btn-order" data-testid="btn-order" onClick={handleClick}>
          ENTREGAR ORDEN
        </button>
      </section>
    </div>
  );
};

export default ReadyOrder;
