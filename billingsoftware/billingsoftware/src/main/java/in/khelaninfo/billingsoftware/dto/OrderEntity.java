package in.khelaninfo.billingsoftware.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import in.khelaninfo.billingsoftware.io.PaymentMethod;
import in.khelaninfo.billingsoftware.io.PaymentDetails;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tbl_orders")
public class OrderEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String orderId;
	private String customerName;
	private String mobileNumber;
	private Double subtotal;
	private Double tax;
	private Double grandTotal;
	private LocalDateTime createdAt;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name="order_id")
	private List<OrderItemEntity> items=new ArrayList<>();

	@Embedded
	private PaymentDetails paymentDetails;
	
	@Enumerated(EnumType.STRING)
	private PaymentMethod PaymentMethod;
	
	@PrePersist
	protected void onCreate() {
		this.orderId = "ORD" + System.currentTimeMillis();
		this.createdAt = LocalDateTime.now();
	}

}
