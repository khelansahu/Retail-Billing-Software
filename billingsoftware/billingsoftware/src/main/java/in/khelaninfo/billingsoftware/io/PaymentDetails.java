package in.khelaninfo.billingsoftware.io;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDetails {

	private String razorpayOrderId;
	private String razorpayPaymentId;
	private String razorpaySignature;
	private enum PaymentStatus{
		PENDING, COMPLETED, FAILED
	}
}
