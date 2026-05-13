package ProjectCamilly.project15years.model;

import jakarta.persistence.*;

@Entity
@Table(name = "invited")
public class Invited {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String InvitedName;
    private int numberFamily;
    private boolean confirmed;

    public Invited(){

    }

    public Invited(String invitedName, int numberFamily, boolean confirmed) {
        InvitedName = invitedName;
        this.numberFamily = numberFamily;
        this.confirmed = confirmed;
    }

    public String getInvitedName() {
        return InvitedName;
    }

    public void setInvitedName(String invitedName) {
        InvitedName = invitedName;
    }

    public int getNumberFamily() {
        return numberFamily;
    }

    public void setNumberFamily(int numberFamily) {
        this.numberFamily = numberFamily;
    }

    public boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }
}
